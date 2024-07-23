import React, { useState } from 'react';

interface InputValue {
  name: string;
  meet_url: string;
  gemini_api_key: string;
}

interface MeetingResult {
  summary: string;
}

function App() {
  const [inputValue, setInputValue] = useState<InputValue>({
    name: '',
    meet_url: '',
    gemini_api_key: '',
  });
  const [result, setResult] = useState<MeetingResult | null>(null);

  function handleChange(e: React.ChangeEvent<HTMLInputElement>) {
    const key = e.target.id as keyof InputValue;
    const value = e.target.value;
    setInputValue((prev) => ({ ...prev, [key]: value }));
  }

  const handleOnSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // try {
      const result = await window.ipcRenderer.invoke('start-notulen', {
        debug: true,
        name: inputValue.name,
        googleMeetUrl: 'https://meet.google.com/tnx-atdh-yat',//inputValue.meet_url,
        language: 'id-ID',
        geminiApiKey: 'AIzaSyC6jfxBUCTV6LBcxYUdPnHU0gfQI81oXV8',// inputValue.gemini_api_key,
        recordingLocation: './out',
        prompt: 'Kamu adalah seorang Asisten Note Takker...',
      });
      setResult(result);
      console.log(result)
    // } catch (error) {
    //   console.error('Error:', error);
    // }
  };

  return (
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
              <div>
                <h3>Summary:</h3>
                <p>{result.summary}</p>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
