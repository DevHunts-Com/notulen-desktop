import Versions from './components/Versions'
// import electronLogo from './assets/electron.svg'
import 'flowbite'

function App() {

  const handleOnSubmit = async () => {
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
    <div className="fixed inset-0 flex items-center justify-center z-50">
      <div className="p-4 w-full max-w-xl">
        <div className="bg-white rounded-lg shadow">
          <div className="p-4 md:p-5">
            <form className="space-y-4" onSubmit={handleOnSubmit}>
              <div>
                <label htmlFor="name">Name</label>
                <input
                  // onChange={handleChange}
                  type="text"
                  id="name"
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg block w-full p-2.5"
                  placeholder="My Assistant"
                  required
                />
              </div>
              <div>
                <label htmlFor="meet_url">Url Meet</label>
                <input
                  // onChange={handleChange}
                  type="text"
                  id="meet_url"
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg block w-full p-2.5"
                  placeholder="https://meet.google.com/xxx-xxx-xxx"
                  required
                />
              </div>
              <div>
                <label htmlFor="gemini_api_key">Gemini Api Key</label>
                <input
                  // onChange={handleChange}
                  type="text"
                  id="gemini_api_key"
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg block w-full p-2.5"
                  placeholder="••••••••"
                  required
                />
              </div>
              <button
                type="submit"
                className="w-full text-white bg-blue-700 hover:bg-blue-800 rounded-lg text-sm px-5 py-2.5"
              >
                Start
              </button>
            </form>
            {/* {result && (
              <div>
                <h3>Summary:</h3>
                <p>{result.summary}</p>
              </div>
            )} */}
          </div>
        </div>
      </div>
    </div>
      {/* <img alt="logo" className="logo" src={electronLogo} />
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



      <div className="relative overflow-x-auto">
          <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
              <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                  <tr>
                      <th scope="col" className="px-6 py-3">
                          Product name
                      </th>
                      <th scope="col" className="px-6 py-3">
                          Color
                      </th>
                      <th scope="col" className="px-6 py-3">
                          Category
                      </th>
                      <th scope="col" className="px-6 py-3">
                          Price
                      </th>
                  </tr>
              </thead>
              <tbody>
                  <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                      <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                          Apple MacBook Pro 17"
                      </th>
                      <td className="px-6 py-4">
                          Silver
                      </td>
                      <td className="px-6 py-4">
                          Laptop
                      </td>
                      <td className="px-6 py-4">
                          $2999
                      </td>
                  </tr>
                  <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                      <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                          Microsoft Surface Pro
                      </th>
                      <td className="px-6 py-4">
                          White
                      </td>
                      <td className="px-6 py-4">
                          Laptop PC
                      </td>
                      <td className="px-6 py-4">
                          $1999
                      </td>
                  </tr>
                  <tr className="bg-white dark:bg-gray-800">
                      <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                          Magic Mouse 2
                      </th>
                      <td className="px-6 py-4">
                          Black
                      </td>
                      <td className="px-6 py-4">
                          Accessories
                      </td>
                      <td className="px-6 py-4">
                          $99
                      </td>
                  </tr>
              </tbody>
          </table>
      </div>


      <button onClick={start}>click here</button>

      <Versions></Versions> */}
    </>
  )
}

export default App
