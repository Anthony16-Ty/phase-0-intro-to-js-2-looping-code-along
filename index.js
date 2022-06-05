const gifts = ["teddy bear", "drone", "doll"];

const newArray1=[];

function writeCards(stringArray, eventName) {
  for (let i = 0; i < stringArray.length; i++) {
    newArray1.push(
      `Thank you, ${stringArray[i]}, for the wonderful ${eventName} gift!`
    );
    
  }
  return newArray1;
}

function wrapGifts(gifts) {
  let i = 0;
  while (i < gifts.length) {
    console.log(`Wrapped ${gifts[i]} and added a bow!`);
    i++;
  }

  return gifts;
}

function countDown(count) {
  let t = count;
  while (t >= 0) {
    console.log(t);
    t--;
  }
}
countDown(10);
