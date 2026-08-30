export default function AppHeader() {
  return (
    <nav className="navbar bg-body-tertiary">
      <div className="container">
        <a className="navbar-brand" href="/">
          ARTS -Unity Devlog-
        </a>
        <span className="navbar-text">v{__APP_VERSION__}</span>
      </div>
    </nav>
  );
}
