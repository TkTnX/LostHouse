const navIconBtn = document.querySelector("#navIconBtn");
const headerTop = document.querySelector(".header__top");
const navIcon = document.querySelector(".nav-icon");

navIconBtn.addEventListener("click", () => {
  navIcon.classList.toggle("nav-icon--active");
  headerTop.classList.toggle("header__top-mobile");
  document.body.classList.toggle("no-scroll");
});

// phone mask

mask("[data-tel-input]");

// Удаляем + если больше ничего не введено, чтобы показать placeholder

const phoneInputs = document.querySelectorAll("[data-tel-input]");
phoneInputs.forEach((inp) => {
  inp.addEventListener("input", () => {
    if (inp.value === "+") inp.value = "";
  });
  inp.addEventListener("blur", () => {
    if (inp.value === "+") inp.value = "";
  });
});

// данные карты

initMap();

async function initMap() {
  // Промис `ymaps3.ready` будет зарезолвлен, когда загрузятся все компоненты основного модуля API
  await ymaps3.ready;

  const { YMap, YMapDefaultSchemeLayer } = ymaps3;

  // Иницилиазируем карту
  const map = new YMap(
    // Передаём ссылку на HTMLElement контейнера
    document.getElementById("map"),

    // Передаём параметры инициализации карты
    {
      location: {
        // Координаты центра карты
        center: [56.838011, 60.597474],

        // Уровень масштабирования
        zoom: 8,
      },
    }
  );

  // Добавляем слой для отображения схематической карты
  map.addChild(new YMapDefaultSchemeLayer());
}
