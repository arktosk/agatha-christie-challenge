import novelsCollectionJson from './novels.json';

const hashControlArray = [];
const generateHash = (length) => {
  const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
  const charactersLength = characters.length;
  let result = '';
  for (let i = 0; i < length; i++) {
    result += characters.charAt(Math.floor(Math.random() * charactersLength));
  }
  if (hashControlArray.indexOf(result) !== -1) {
    console.log(`You lucky guy! ${result}`)
    return generateHash(length)    
  }
  return result
}

export default () => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(novelsCollectionJson.map((novelData) => ({
        id: generateHash(20),
        data: () => novelData,
      })))
    }, 2000)
  })
}