/* eslint-disable */

document.addEventListener("DOMContentLoaded", () => {
  // Тестовое задание 1

  function Bomb(message, delay) {
    this.message = message;
    setTimeout(() => this.blowUp(), delay * 1000); // взрываем через delay sec
  }
  Bomb.prototype.blowUp = function() {
    console.log(this.message);
  };

  new Bomb("Explosion!", 0.5);

  // Тестовое задание 2:
  // /**
  //  * Реализовать RLE-сжатие: AAAB -> A3B, BCCDDDAXXXX -> BC2D3AX4
  //  * @param  {string} value
  //  * @return {string}
  //  */

  function rle(value) {
    const encoded = [];
    for (let i = 1, count = 1, prev = value[0]; i < value.length + 1; i++) {
      if (value[i] === prev) {
        count++;
      } else {
        count > 1 ? encoded.push(prev, count) : encoded.push(prev);
        count = 1;
        prev = value[i];
      }
    }
    return encoded.join("");
  }

  console.log(rle("AVVVBBBVVXDHJFFFFDDDDDDHAAAAJJJDDSLSSSDDDD"));

  // Тестовое задание 3:

  const handleBanner = opt => {
    // 001 - картинка
    // 010 - текст
    // 100 – кнопка
    const banner = document.querySelector("#banner");
    const bannerImg = document.querySelector("#banner img");
    const bannerText = document.querySelector("#banner p");
    const bannerButton = document.querySelector("#banner button");

    const options = opt.split("").map(item => !!Number(item));

    const [imageEnable, textEnable, buttonEnable] = options;

    imageEnable && bannerImg.addEventListener("click", () => alert("bannerImg"));
    textEnable && bannerText.addEventListener("click", () => alert("bannerText"));
    buttonEnable && bannerButton.addEventListener("click", () => alert("bannerButton"));
  };

  handleBanner("011");

  // Тестовое задание 4:
  // Замените цикл конвейером:
  const input = [
    { name: "Ivan", job: "programmer" },
    { name: "Alex", job: "designer" }
  ];
  const names = input.filter(item => item.job === "programmer").map(item => item.name);

  console.log(names);
});
