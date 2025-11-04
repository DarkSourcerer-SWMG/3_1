(function () {
  const example = document.getElementById('example')
  const cw1 = document.getElementById('cw1')
  const cw2 = document.getElementById('cw2')
  const cw3 = document.getElementById('cw3')
  const answer = document.getElementById('answer')

  example.addEventListener("click", function () {
    const loadingPopup = document.getElementById('loading-popup');
    fetch('https://my-json-server.typicode.com/DarkSourcerer-SWMG/json-server/posts')
    .then(response => response.json())
    .then(posts => {
      let html = '<ul>';
      posts.forEach(post => {
        html += `<li><strong>${post.title}</strong><br>${post.body}</li>`;
      });
      html += '</ul>';
      answer.innerHTML = html;
    })
    .catch(error => {
      answer.innerHTML = 'Błąd podczas pobierania danych.';
      console.error(error);
    });
  });

  cw1.addEventListener("click", function () {
      fetch('https://jsonplaceholder.typicode.com/posts/1')
        .then(response => response.json())
        .then(post => {
          const html = `
            <ul>
              <li><strong>${post.title}</strong><br>${post.body}</li>
            </ul>`;
          answer.innerHTML = html;
        })
        .catch(error => {
          answer.innerHTML = 'Błąd podczas pobierania posta.';
          console.error(error);
        });
  });

  cw2.addEventListener("click", function () {
    const answer = document.getElementById('answer');
    answer.innerHTML = 'Processing...';
    const nowyPost = {
      title: 'Przykładowy nowy post',
      body: 'To jest treść nowego posta',
      userId: 1
    };

    fetch('https://jsonplaceholder.typicode.com/posts', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(nowyPost)
    })
    .then(response => response.json())
    .then(data => {
      answer.innerHTML = `Dodano nowy post o ID = ${data.id}`;
    })
    .catch(error => {
      answer.innerHTML = 'Błąd podczas dodawania posta.';
      console.error(error);
    });
  });

  cw3.addEventListener("click", function () {
    fetch('https://jsonplaceholder.typicode.com/posts')
    .then(response => response.json())
    .then(posts => {
      console.log(posts);
    })
  });

})();
