import { createContext, useEffect, useState } from "react";
import { CONFIG } from '../config';
import { mediaFetchingService } from "../service/MediaFetchingService";
import anime_dict from "../../public/anime_dict.json"

export const MediaContext  = createContext();

export function MediaContextProvider({ children }) {

    const [itemType, setItemType] = useState(null);
    const [itemId, setItemId] = useState(null);
    const [scoreRange, setScoreRange] = useState([0, 100]);
    const [yearRange, setYearRange] = useState([CONFIG.YEAR_RANGE.MIN, CONFIG.YEAR_RANGE.MAX]);
    const [suggestions, setSuggestions] = useState(null);
    const [excludedGenres, setExcludedGenres] = useState([]);
    const [includedGenres, setIncludedGenres] = useState([]);
    const formats = CONFIG.MEDIA_FORMAT["ANIME"];
    const [selectedFormats, setSelectedFormats] = useState([]);

    useEffect(() => {
        updateSuggestions();
    }, [itemId])
  
    function updateSuggestions() {
        if (!itemId) return;

        const options = {
            initialYear: yearRange[0],
            finalYear: yearRange[1],
            minimumScore: scoreRange[0],
            maximumScore: scoreRange[1],
            excludedGenres: excludedGenres,
            includedGenres: includedGenres,
            selectedFormats: selectedFormats,
        };

        mediaFetchingService.getSuggestions("ANIME", itemId, options) // temporarily hardcoded
        .then(suggestionsFetched => setSuggestions(suggestionsFetched));
    }

    function handleSelection(selectedItem) {
        if (!selectedItem) { return }
        var id = anime_dict[selectedItem];
        setItemId(id);
    }

    const handleFormatChange = (event) => {
        const { value } = event.target;
        setSelectedFormats(prev => 
            prev.includes(value) 
                ? prev.filter(format => format !== value) 
                : [...prev, value]
        );
    };

    const contextValue = {
        itemType,
        itemId,
        yearRange,
        scoreRange,
        suggestions,
        excludedGenres,
        includedGenres,
        formats,
        selectedFormats,
        setYearRange,
        setScoreRange,
        setExcludedGenres,
        setIncludedGenres,
        handleFormatChange,
        handleSelection,
        updateSuggestions,
    };

    return (
        <MediaContext.Provider value={contextValue}>
            {children}
        </MediaContext.Provider>
    );
}