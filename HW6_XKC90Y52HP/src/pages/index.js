const url = "https://corona.lmao.ninja/v2/countries/gh";

function Home({ covidCase }) {
  return (
    <div>
      <img width="100px" src={covidCase.countryInfo.flag} />
      <h2>{covidCase.country}</h2>
      <p>{covidCase.cases}</p>
      <p>{covidCase.deaths}</p>
      <p>{covidCase.recovered}</p>
      <p>{covidCase.active}</p>
    </div>
  );
}

export async function getStaticProps(context) {
  const response = await fetch(url);

  return {
    props: {
      covidCase: await response.json(),
    }, // will be passed to the page component as props
  };
}

export default Home;
