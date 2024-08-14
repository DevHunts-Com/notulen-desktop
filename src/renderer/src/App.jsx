import 'flowbite'
import { useEffect, useState } from 'react'
import ReactMarkdown from 'react-markdown'

function App() {

  const [result, setResult] = useState();
  const [inputValue, setInputValue] = useState({
    name: '',
    meet_url: '',
    gemini_api_key: ''
  })

  const handleChange = (e) => {
    const key = e.target.id;
    const value = e.target.value;
    setInputValue((prev) => ({ ...prev, [key]: value }));
  }

  const handleOnSubmit = async (e) => {
    e.preventDefault()
    const config = {
      debug: false,
      name: inputValue.name,
      googleMeetUrl: inputValue.meet_url,
      language: "id-ID",
      geminiApiKey: inputValue.gemini_api_key,
      recordingLocation: './out',
      prompt: 'Kamu adalah seorang Asisten Note Takker...',
      recordMeeting: true,
      streamConfig: {
        audio: true,
        video: true,
        audioBitsPerSecond: 128000, // 128kbps
        videoBitsPerSecond: 2500000, // 2.5Mbps
        videoConstraints: {
          mandatory: {
            width: { max: 1280 },
            height: { max: 720 },
            frameRate: { max: 15 },
          },
        },
      },
    }
    const response = await window.api.startNotulen(config)
    console.log('Notulen response:', response);
    setResult(response);
  }

  useEffect(() => {
    // console.log('this result: ', result);
  }, [result]);

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
                  onChange={handleChange}
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
                  onChange={handleChange}
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
                  onChange={handleChange}
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
            {result && (
              <div className="mt-4">
                <h3 className="text-lg font-semibold">Summary:</h3>
                <ReactMarkdown>{result.summary}</ReactMarkdown>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
    </>
  )
}

export default App
