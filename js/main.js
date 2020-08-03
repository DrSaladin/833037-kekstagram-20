'use strict';

(function () {
  var MAX_PHOTO_QUANTITY = 25;

  var MIN_LIKES = 15;
  var MAX_LIKES = 200;

  var MIN_AVATAR_NUMBER = 1;
  var MAX_AVATAR_NUMBER = 6;

  var messages = [
    "Всё отлично!",
    "В целом всё неплохо. Но не всё.",
    "Когда вы делаете фотографию, хорошо бы убирать палец из кадра. В конце концов это просто непрофессионально.",
    "Моя бабушка случайно чихнула с фотоаппаратом в руках и у неё получилась фотография лучше.",
    "Я поскользнулся на банановой кожуре и уронил фотоаппарат на кота и у меня получилась фотография лучше.",
    "Лица у людей на фотке перекошены, как будто их избивают. Как можно было поймать такой неудачный момент?!"
  ];

  var names = [
    'Вася',
    'Ваня',
    'Петя',
    'Таня',
    'Кристи',
    'Аня'
  ];

  function getRandomNumber (min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }

  function getRandomArrayElement (arr) {
    var rand = Math.floor(Math.random() * arr.length);
    return arr[rand];
  }


  var userPhotoTemplate = document.querySelector('#picture')
    .content
    .querySelector('.picture');


  function renderPhotoList(num) {
    for (var i = 0; 0 < num; i++) {
      function renderPhotoElement() {
        var photoElement = userPhotoTemplate.cloneNode(true);

        photoElement.querySelector('img').src = 'photos/' + (i + 1) + '.jpg';
        photoElement.querySelector('.picture__comments').textContent = getRandomArrayElement(messages);
        photoElement.querySelector('.picture__likes').textContent = getRandomNumber(MIN_LIKES, MAX_LIKES);


        //return photoElement;

      }
    }
  }

  renderPhotoList(MAX_PHOTO_QUANTITY);

}) ();
