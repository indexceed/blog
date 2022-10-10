import MenuIcon from "@mui/icons-material/Menu";

export const TitleMenu = () => {
  return (
    <div className="head">
          <div className="dropdown">
            <span>
              <MenuIcon />
            </span>
            <div className="dropdown-content">
              <nav>
                <ul>
                  <li>
                    {" "}
                    <a href="defautl">Default</a>
                  </li>
                  <li>
                    {" "}
                    <a href="news">News</a>
                  </li>
                  <li>
                    {" "}
                    <a href="contact">Contact</a>
                  </li>
                  <li>
                    {" "}
                    <a href="about">About</a>
                  </li>
                </ul>
              </nav>
            </div>
          </div>
          <div className="title">
            <h1>BlogX</h1>
          </div>
        </div>
  )
}
