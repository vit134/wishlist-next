const trans = require('transliteration').transliterate;
const R = require('ramda');
const Datauri = require('datauri');
const datauri = new Datauri();

var cloudinary = require('cloudinary');

cloudinary.config({
  cloud_name: 'vit134',
  api_key: '281223243188336',
  api_secret: '29SEnKQ8hizuCkwsed155d8WFsY'
});

const trim = string => string.replace(/\s+/g, '-');
const getFileName = fileName => fileName.split('.')[0];
const toLowerCase = string => string.toLowerCase();

const renameFile = function (file, folder = 'item-images') {
  return new Promise((resolve, reject) => {
    let fileName = '';
    let filePath = '';

    if (typeof file === 'string') {
      const fileNameArr = file.split('/');
      fileName = fileNameArr[fileNameArr.length - 1];
      filePath = file;
    } else {
      fileName = R.compose(toLowerCase, trim, trans)(file.name);
      filePath = getFileName(file.response.tmpPath);
    }

    cloudinary.v2.uploader.upload(filePath,
      {
        folder,
        public_id: fileName,
        overwrite: true
      },
      function (error, data) {
        if (!error) {
          resolve({ success: true, data });
        } else {
          reject(error);
        }
      });
  });
};

const uploadFile = (file, folder = 'item-images') => {
  return new Promise((resolve, reject) => {
    const { name, data, mimetype } = file;
    datauri.format(mimetype, data);

    cloudinary.v2.uploader.upload(datauri.content,
      {
        folder,
        public_id: name,
        overwrite: true
      },
      function (error, data) {
        if (!error) {
          resolve({ success: true, data });
        } else {
          reject(error);
        }
      });
  });
};

// const normaliseAccountUpdateData = async function (data) {
//   const result = { ...data };

//   if (result.image) {
//     const name = await moveFile(req.body.image[0]);
//     result.avatar = name.url;
//   }

//   if (result.date_of_birth) {
//     result.date_of_birth = moment(result.date_of_birth).unix();
//   }

//   return result;
// };

// const sendMail = function (mailOptions) {
//   return new Promise(function (resolve, reject) {
//     nodemailer.createTestAccount((err, account) => {
//       const transporter = nodemailer.createTransport({
//         host: 'smtp.ethereal.email',
//         port: 587,
//         secure: false, // true for 465, false for other ports
//         auth: {
//           user: account.user, // generated ethereal user
//           pass: account.pass // generated ethereal password
//         }
//       })

//       transporter.sendMail(mailOptions, function (error, info) {
//         if (error) {
//           console.log(error)
//           reject(error)
//         } else {
//           console.log('Email sent: ' + info.response)
//           console.log('Message sent: %s', info.messageId)
//           // Preview only available when sending through an Ethereal account
//           console.log('Preview URL: %s', nodemailer.getTestMessageUrl(info))
//           resolve(info)
//         }
//       })
//     })
//   })
// }

// const findNode = (tree, parentId) => {
//   const walk = (node) => {
//     console.log(node._id, parentId);
//     if (node._id == parentId) {

//       return node;
//     };

//     if (node.children) {
//         for (let i = 0; i < node.children.length; i++) {
//           const a = walk(node.children[i]);
//           console.log(a);
//           if (a) return a;
//         }
//     }
//   }

//   return walk(tree);
// }

const findNode = (tree, parentId) => {
  var arr = [tree]; // очередь
  var current;

  while (arr.length > 0) { // пока очередь не пустая
    current = arr.shift(); // удаляем последний элемент очереди и присваем его текущей ноде
    if (String(current._id) === String(parentId)) {
      arr.length = 0;
      return current;
    }

    if (current.children) { // если в ноде есть дети записываем их в очередь
      current.children.forEach(el => {
        arr.push(el);
      });
    }
  }
};

const getCategoriesTree = (data) => {
  const result = {};
  const root = [];
  const child = [];

  data.forEach((el) => {
    const { name, _id, parentId } = el;
    const element = { title: name, _id, parentId, value: _id };
    if (!el.parentId) {
      root.push({ ...element, selectable: false });
    } else {
      child.push(element);
    }
  });

  result.children = root;

  child.forEach(el => {
    const needNode = findNode(result, el.parentId);

    if (needNode) {
      needNode.selectable = false;

      if (needNode.children) {
        needNode.children.push(el);
      } else {
        needNode.children = [el];
      }
    }
  });

  return Object.values(result)[0];
};

const filterWishesByCategories = (wishes) => {
  return wishes.reduce((acc, wish) => {
    const { category } = wish;
    const { _id, name, slug, parentId } = category[0];

    if (_id in acc) {
      acc[_id].wishes.push(wish);
    } else {
      acc[_id] = {
        _id,
        name,
        slug,
        parentId,
        wishes: [wish]
      };
    }

    return acc;
  }, {});
};

module.exports = {
  uploadFile,
  renameFile,
  // sendMail,
  // normaliseAccountUpdateData,
  getCategoriesTree,
  filterWishesByCategories
};
