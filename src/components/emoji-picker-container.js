import React from "react";
import EmojiPicker from "./emoji-picker";

/**
 * @typedef {object} Props
 * @property {boolean} showPicker
 * @property {'light' | 'dark' | 'auto'} theme
 * @property {(emoji: import("../types/types").EmojiMartItem) => void} handleSelectEmoji
 * @property {boolean} disableRecent
 * @property {any[]=} customEmojis
 * @property {('above' | 'below')=} position
 * @property {import('../types/types').Languages=} language
 * @property {number} emojiSize
 * @property {number} emojiButtonSize
 */

/**
 * Emoji Picker Button Component
 * @param {Props} props
 * @return {JSX.Element}
 */
function EmojiPickerContainer({
  showPicker,
  theme,
  handleSelectEmoji,
  disableRecent,
  customEmojis,
  position,
  language,
  emojiButtonSize,
  emojiSize
}) {
  return (
    <div className="react-emoji-picker--container">
      {showPicker && (
        <div
          className="react-emoji-picker--wrapper"
          onClick={evt => evt.stopPropagation()}
          style={position === 'below' ? {top: '40px'} : {}}
        >
          <div className="react-emoji-picker">
            <EmojiPicker
              theme={theme}
              onSelectEmoji={handleSelectEmoji}
              disableRecent={disableRecent}
              customEmojis={customEmojis}
              language={language}
              emojiButtonSize={emojiButtonSize}
              emojiSize={emojiSize}
            />
          </div>
        </div>
      )}
    </div>
  );
}

export default EmojiPickerContainer;
