const ratingsList = document.getElementsByClassName('ratings-list')[0];

[
  'Rated 5 Stars in Reviews',
  'Rated 5 Stars in Report Guru',
  'Rated 5 Stars in BestTech',
].forEach((comment) => {
  const listItem = document.createElement('li'),
    starsWrapper = document.createElement('div'),
    title = document.createElement('h2');

  for (let j = 0; j < 5; j++) {
    const star = document.createElementNS('http://www.w3.org/2000/svg', 'svg');

    star.setAttribute('width', '17');
    star.setAttribute('height', '16');
    star.setAttribute('xmlns', 'http://www.w3.org/2000/svg');

    const path = document.createElementNS('http://www.w3.org/2000/svg', 'path');

    path.setAttribute(
      'd',
      'M16.539 6.097a.297.297 0 00-.24-.202l-5.36-.779L8.542.26a.296.296 0 00-.53 0L5.613 5.117l-5.36.779a.297.297 0 00-.165.505l3.88 3.78-.917 5.34a.297.297 0 00.43.312l4.795-2.52 4.794 2.52a.296.296 0 00.43-.313l-.916-5.338L16.464 6.4c.08-.08.11-.197.075-.304z',
    );
    path.setAttribute('fill', '#EF9546');
    path.setAttribute('fill-rule', 'nonzero');

    star.appendChild(path);
    starsWrapper.appendChild(star);
  }

  listItem.appendChild(starsWrapper);

  title.innerHTML = comment;

  listItem.appendChild(title);

  ratingsList.appendChild(listItem);
});
