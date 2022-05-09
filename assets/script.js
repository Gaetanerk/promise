const getCountries = async () => {
  //je recupere la péponse de l'api pays
  const url = await fetch("https://restcountries.com/v3.1/all");
  //je transforme le resultat en JSON
  const res = await url.json();
  console.log(res);
  //pour chaque pays
  res.forEach((country) => {
    //je créer sa "fiche"
    const p = document.createElement("p");
    //si le pays ne possede pas de capitale "j'adapte" sa fiche en retirant sa capitale
    if (country.capital) {
      p.innerHTML =
        `<img src="${country.flags.png}" width="250px" border="1px solid black"></img>` +
        `</br>` +
        `${country.name.common} :` +
        `</br>` +
        `Population : ${country.population} habitants` +
        `</br>` +
        `Capitale : ${country.capital[0]}` +
        `</br>` +
        `Nom français : ${country.translations.fra.common}` +
        `</br>` +
        `</br>`;
    } else {
      p.innerHTML =
        `<img src="${country.flags.png}" width="250px" border="1px solid black"></img>` +
        `</br>` +
        `${country.name.common} :` +
        `</br>` +
        `Population : ${country.population} habitants` +
        `</br>` +
        `Capitale : pas de capitale` +
        `</br>` +
        `Nom français : ${country.translations.fra.common}` +
        `</br>` +
        `</br>`;
    }
    //j'ajoute "la fiche" au body
    document.querySelector("body").appendChild(p);
    console.log(country);
  });
};

getCountries();
