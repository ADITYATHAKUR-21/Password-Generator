import { useCallback, useEffect, useRef, useState } from "react";


const Password = () => {
  const [Length, setLength] = useState(6);
  const [NumberAllowed, setNumberAllowed] = useState(false);
  const [CharAllowed, setCharAllowed] = useState(false);
  const [Password, setPassword] = useState("");
  const passwordRef = useRef(null);

  const PasswordGenerator = useCallback(() => {
    let Pass = "";
    let strr = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";

    if (NumberAllowed) strr += "0123456789";
    if (CharAllowed) strr += "~!@#$%^&*?|<>";

    for (let i = 1; i <= Length; i++) {
      const chrr = Math.floor(Math.random() * strr.length);
      Pass += strr.charAt(chrr);
    }
    setPassword(Pass);
  }, [Length, NumberAllowed, CharAllowed, ]);

  const copyPasswordToClipboard = useCallback(() => {
    passwordRef.current?.select();
    passwordRef.current?.setSelectionRange(0, 999);
    window.navigator.clipboard.writeText(Password);
  }, [Password]);

  useEffect(() => {
    PasswordGenerator();
  }, [Length, NumberAllowed, CharAllowed, ]);

  return (
    <div className="bg-white text-gray-800 min-h-screen">
      {/* Fixed Navbar */}
      <nav className="fixed top-0 left-0 right-0 bg-white shadow-md z-50 border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            {/* Logo */}
            <div className="flex-shrink-0">
              <h3 className="text-2xl font-bold text-gray-900">PASSWORD GENERATOR</h3>
            </div>
            
            {/* Navigation Buttons */}
            <div className="flex items-center space-x-4">
              <button className="text-gray-700 hover:text-gray-900 px-3 py-2 rounded-md text-sm font-medium transition duration-150 ease-in-out">
                Save
              </button>
              <button className="text-gray-700 hover:text-gray-900 px-3 py-2 rounded-md text-sm font-medium transition duration-150 ease-in-out">
                SignUp
              </button>
              <button className="text-gray-700 hover:text-gray-900 px-3 py-2 rounded-md text-sm font-medium transition duration-150 ease-in-out">
                Login
              </button>
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none"
               stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"
                className="text-gray-700 hover:text-gray-900 cursor-pointer transition duration-150 ease-in-out">
                <path d="M18 20a6 6 0 0 0-12 0"/>
                <circle cx="12" cy="10" r="4"/>
                <circle cx="12" cy="12" r="10"/>
              </svg>
            </div>
          </div>
        </div>
      </nav>

      {/* Main Content */}
      <main className="pt-16 min-h-screen flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-md w-full">
          {/* Password Generator Card */}
          <div className="bg-white rounded-lg shadow-lg p-8 border border-gray-100">
            <div className="text-center mb-8">
              <h2 className="text-3xl font-bold text-gray-900 mb-2">Generate Password</h2>
              <p className="text-gray-600">Create a secure password with custom options</p>
            </div>

            {/* Password Display */}
            <div className="mb-6">
              <label className="block text-sm font-medium text-gray-700 mb-2">Generated Password</label>
              <div className="flex">
                <input
                  type="text"
                  placeholder="Your password will appear here"
                  value={Password}
                  readOnly
                  className="flex-1 px-3 py-2 border border-gray-300 rounded-l-md focus:outline-none focus:ring-2 focus:ring-gray-500 focus:border-transparent bg-gray-50 text-gray-900 font-mono text-sm"
                  ref={passwordRef}
                />
                <button
                  className="px-4 py-2 bg-gray-900 text-white rounded-r-md hover:bg-gray-800 transition duration-150 ease-in-out focus:outline-none focus:ring-2 focus:ring-gray-500 focus:ring-offset-2"
                  onClick={copyPasswordToClipboard}
                >
                  Copy
                </button>
              </div>
            </div>

            {/* Password Options */}
            <div className="space-y-6">
              {/* Length Slider */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Password Length: {Length}
                </label>
                <input
                  type="range"
                  min={6}
                  max={100}
                  value={Length}
                  onChange={(e) => setLength(e.target.value)}
                  className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer slider"
                />
                <div className="flex justify-between text-xs text-gray-500 mt-1">
                  <span>6</span>
                  <span>100</span>
                </div>
              </div>

              {/* Checkboxes */}
              <div className="space-y-4">
                <div className="flex items-center">
                  <input
                    type="checkbox"
                    id="numbers"
                    defaultChecked={NumberAllowed}
                    onChange={() => setNumberAllowed((prev) => !prev)}
                    className="h-4 w-4 text-gray-900 border-gray-300 rounded focus:ring-gray-500"
                  />
                  <label htmlFor="numbers" className="ml-3 text-sm font-medium text-gray-700">
                    Include Numbers (0-9)
                  </label>
                </div>

                <div className="flex items-center">
                  <input
                    type="checkbox"
                    id="characters"
                    defaultChecked={CharAllowed}
                    onChange={() => setCharAllowed((prev) => !prev)}
                    className="h-4 w-4 text-gray-900 border-gray-300 rounded focus:ring-gray-500"
                  />
                  <label htmlFor="characters" className="ml-3 text-sm font-medium text-gray-700">
                    Include Special Characters 
                  </label>
                </div>
              </div>

              {/* Generate Button */}
              <button
                onClick={PasswordGenerator}
                className="w-full bg-gray-900 text-white py-3 px-4 rounded-md hover:bg-gray-800 transition duration-150 ease-in-out focus:outline-none focus:ring-2 focus:ring-gray-500 focus:ring-offset-2 font-medium"
              >
                Generate New Password
              </button>
            </div>
          </div>

          {/* Additional Info Card */}
          <div className="mt-6 bg-white rounded-lg shadow-md p-6 border border-gray-100">
            <h3 className="text-lg font-semibold text-gray-900 mb-3">Password Tips</h3>
            <ul className="text-sm text-gray-600 space-y-2">
              <li className="flex items-start">
                <span className="text-gray-400 mr-2">•</span>
                Use at least 12 characters for better security
              </li>
              <li className="flex items-start">
                <span className="text-gray-400 mr-2">•</span>
                Include numbers and special characters
              </li>
              <li className="flex items-start">
                <span className="text-gray-400 mr-2">•</span>
                Don't reuse passwords across different accounts
              </li>
              <li className="flex items-start">
                <span className="text-gray-400 mr-2">•</span>
                Store passwords securely using a password manager
              </li>
            </ul>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Password;
