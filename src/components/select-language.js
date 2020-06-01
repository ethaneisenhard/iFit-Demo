import React from "react"
import "../styles/components/select-language.scss"

const SelectLanguage = () => {

  function handleLanguageSelect(event){
    let languageValue = event.target.value
    const labelSwap = document.querySelector(".js-label-language-swap")
    labelSwap.innerHTML = languageValue
  }

  return (
    <>
      <div id="selectLanguage">
        <div
          className="language-picker"
        >
          <label className = "label-language-swap js-label-language-swap" htmlFor="language-picker-select" title="Select Language">
            English
          </label>

          <select name="language-picker" id="language-picker-select" onChange={handleLanguageSelect}>
            <option lang="en" value="English">
              English
            </option>
            <option lang="de" value="Deutsch">
              Deutsch
            </option>
            <option lang="fr" value="Francais">
              Français
            </option>
            <option lang="it" value="Italiano">
              Italiano
            </option>
          </select>

        </div>
      </div>
    </>
  )
}

export default SelectLanguage
