import React ,{useState} from 'react';
import EmojiPicker from 'emoji-picker-react';
const FileUploader = () => {
    const hiddenFileInput = React.useRef(null);
    const [showEmojis, setShowEmojis] = useState(false);

    const handleClick = event => {
        console.log("click")
        hiddenFileInput.current.click();
    };
    return (
        <>
          
            <div>
                                <button className="button" onClick={() => setShowEmojis(!showEmojis)}>
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        className="icon"
                                        fill="none"
                                        viewBox="0 0 24 24"
                                        stroke="currentColor"
                                    >
                                        <path
                                            stroke-linecap="round"
                                            stroke-linejoin="round"
                                            stroke-width="2"
                                            d="M14.828 14.828a4 4 0 01-5.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                                        />
                                    </svg>
                                </button>
                            </div>
            
                            {showEmojis && (
                                <div>
                                   <EmojiPicker />
                                </div>
                            )}
        </>
    );
};
export default FileUploader;