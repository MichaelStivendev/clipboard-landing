import "./App.css";
import Button from "./components/Button";
import FeatureItem from "./components/FeatureItem";

function App() {
  return (
    <>
      <main>
        <section className="hero-section">
          <img src="/clipboard-landing/images/logo.svg" alt="logo de Clipboard" />
          <h1> A history of everything you copy</h1>
          <p>
            {" "}
            Clipboard allows you to track and organize everything you copy.
            Instantly access your clipboard on all your devices.
          </p>
          <div className="btn-download">
            <Button
              texto="Download for iOS"
              color="hsl(171, 66%, 44%)"
              shadowColor="hsl(171deg 65.74% 34.94%)"
            />
            <Button
              texto="Download for Mac"
              color="hsl(233, 100%, 69%)"
              shadowColor="hsl(199, 65%, 35%)"
            />
          </div>
        </section>
        <section className="Feature-section">
          <div>
            <h2>Keep track of your snippets</h2>
            <p>
              Clipboard instantly stores any item you copy in the cloud, meaning
              you can access your snippets immediately on all your devices. Our
              Mac and iOS apps will help you organize everything.
            </p>
          </div>
          <div>
            <img src="/clipboard-landing/images/image-computer.png" alt="imagen de computadora" />
          </div>
          <div className="features-section">
            <FeatureItem
              title="Quick Search"
              description="Easily search your snippets by content, category, web address, application, and more."
            />
            <FeatureItem
              title="iCloud Sync"
              description="Instantly saves and syncs snippets across all your devices."
            />
            <FeatureItem
              title="Complete History"
              description="Retrieve any snippets from the first moment you started using the app."
            />
          </div>
        </section>
        <section className="access-section">
          <div>
            <h2> Access Clipboard anywhere</h2>
            <p>
              Whether you’re on the go, or at your computer, you can access all
              your Clipboard snippets in a few simple clicks.
            </p>
          </div>
          <div>
            <img
              src="/clipboard-landing/images/image-devices.png"
              alt="imagen de tablet y movile"
            />
          </div>
          <div className="access-Feature">
            <FeatureItem
              title="Supercharge your workflow"
              description="We’ve got the tools to boost your productivity."
            />

            <div>
              <img src="images/icon-blacklist.svg" alt="icono de blacklist" />
              <FeatureItem
                title="Create blacklists"
                description=" Ensure sensitive information never makes its way to your clipboard by excluding certain sources."
              />
            </div>
            <div>
              <img src="images/icon-text.svg" alt="icono de text snippets" />

              <FeatureItem
                title="Plain text snippets"
                description="Remove unwanted formatting from copied text for a consistent look."
              />
            </div>
            <div>
              <img src="images/icon-preview.svg" alt="icono de preview" />

              <FeatureItem
                title="Sneak preview"
                description=" Quick preview of all snippets on your Clipboard for easy access."
              />
            </div>
          </div>
        </section>
        <article>
          <div>
            <img src="/clipboard-landing/images/logo-google.png" alt="imagen logo de google" />
            <img src="/clipboard-landing/images/logo-ibm.png" alt="imagen logo de ibm" />
            <img
              src="/clipboard-landing/images/logo-microsoft.png"
              alt="imagen logo de microsoft"
            />
            <img src="/clipboard-landing/images/logo-hp.png" alt="imagen logo de hp" />
            <img
              src="/clipboard-landing/images/logo-vector-graphics.png"
              alt="imagen logo de vector"
            />
          </div>
        </article>
        <section className="clipboard-section">
          <h2>Clipboard for iOS and Mac OS</h2>
          <p>
            Available for free on the App Store. Download for Mac or iOS, sync
            with iCloud and you’re ready to start adding to your clipboard.
          </p>
          <div className="btn-download">
            <Button
              texto="Download for iOS"
              color="hsl(171, 66%, 44%)"
              shadowColor="hsl(171deg 65.74% 34.94%)"
            />
            <Button
              texto="Download for Mac"
              color="hsl(233, 100%, 69%)"
              shadowColor="hsl(199, 65%, 35%)"
            />
          </div>
        </section>
      </main>
      <footer>
        <div className="footer-container">
          <img src="/clipboard-landing/images/logo.svg" alt="logo de Clipboard" />
          <div className="footer-nav">
            <ul>
              <li>FAQs</li>
              <li>Contact Us</li>
              <li>Privacy Policy</li>
              <li>Press Kit</li>
              <li>Install Guide</li>
            </ul>
          </div>
          <div className="footer-social-links">
            <img src="/clipboard-landing/images/icon-facebook.svg" alt="icono de facebook" />
            <img src="/clipboard-landing/images/icon-twitter.svg" alt="icono de twitter" />
            <img src="/clipboard-landing/images/icon-instagram.svg" alt="icono de instagram" />
          </div>
        </div>
      </footer>
    </>
  );
}

export default App;
