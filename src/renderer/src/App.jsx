import Versions from './components/Versions'
import electronLogo from './assets/electron.svg'

function App() {

  const start = async () => {
    console.log('tes 1')
    const config = {
      debug: true,
      name: 'tess name',
      googleMeetUrl: 'https://meet.google.com/hwn-cwkt-sza',
      language: "id-ID",
      geminiApiKey: 'AIzaSyC6jfxBUCTV6LBcxYUdPnHU0gfQI81oXV8',
      recordingLocation: './out',
      prompt: 'Kamu adalah seorang Asisten Note Takker...'
    }
    const response = await window.api.startNotulen(config)
    console.log('Notulen response:', response)
  }

  return (
    <>
      {/* <img alt="logo" className="logo" src={electronLogo} /> */}
      <div className="bg-orange-500">Powered by electron-vite</div>
      <div className="text">
        Build an Electron app with <span className="react">React</span>
      </div>
      <p className="tip">
        Please try pressing <code>F12</code> to open the devTool
      </p>
      <div className="actions">
        <div className="action">
          <a href="https://electron-vite.org/" target="_blank" rel="noreferrer">
            Documentation
          </a>
        </div>
      </div>

      <button onClick={start}>click here</button>

      <Versions></Versions>
    </>
  )
}

export default App
