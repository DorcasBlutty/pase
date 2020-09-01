function Wallpapers() {
  return (
    <div className="sample-wallpaper">
      <article className="wallpaper">
        <img src="./img/venom-1.jpg" alt="Wallpaper #1" className="wallpaper" />
      </article>
      <article className="wallpaper">
        <img src="./img/hulk-1.jpg" alt="Wallpaper #1" className="wallpaper" />
      </article>
      <article className="wallpaper">
        <img src="img/venom-2.jpg" alt="Wallpaper #1" className="wallpaper" />
      </article>
      <style jsx>
        {`
          .sample-wallpaper {
            width: 100%;

            display: grid;
            grid-template-columns: repeat(auto-fit, minmax(20rem, 1fr));
            gap: 4rem;
          }

          .wallpaper {
            height: 25rem;
            box-shadow: 0px 10px 10px rgba(0, 0, 0, 0.5);
          }

          .wallpaper > img {
            width: 100%;
            height: 100%;
            object-fit: cover;
            object-position: center;
          }
        `}
      </style>
    </div>
  );
}
export default Wallpapers;
