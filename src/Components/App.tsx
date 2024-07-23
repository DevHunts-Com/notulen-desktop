import '../App.css';
import 'flowbite';

function App() {

  return (
    <>
      <div className="fixed inset-0 flex items-center justify-center z-50">
          <div className="p-4 w-full max-w-xl">
              <div className="bg-white rounded-lg shadow">
                  <div className="p-4 md:p-5">
                      <form className="space-y-4">
                          <div>
                            <label htmlFor="name">Name</label>
                            <input type="text" name="name" id="name" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white" placeholder='My Assistant' required />
                          </div>
                          <div>
                            <label htmlFor="meet_url">Url Meet</label>
                            <input type="text" name="meet_url" id="meet_url" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white" placeholder='https://meet.google.com/xxx-xxx-xxx' required />
                          </div>
                          <div>
                            <label htmlFor="gemini_api_key">Gemini Api Key</label>
                            <input type="text" name="gemini_api_key" id="gemini_api_key" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white" placeholder='••••••••' required />
                          </div>
                          <button type="submit" className="w-full text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Start</button>
                      </form>
                  </div>
              </div>
          </div>
      </div>
    </>
  )
}

export default App
