import { createContext, useEffect, useState } from "react";
import { CONFIG } from '../config';
import { mediaFetchingService } from "../service/MediaFetchingService";

export const MediaContext  = createContext();

export function MediaContextProvider({ children, inputType, suggestionType }) {

    const [mediaOptions, setMediaOptions] = useState({});
    const [genres, setGenres] = useState([]);
    const [itemId, setItemId] = useState(null);
    const [scoreRange, setScoreRange] = useState([60, 100]);
    const [yearRange, setYearRange] = useState([CONFIG.YEAR_RANGE.MIN, CONFIG.YEAR_RANGE.MAX]);
    const [suggestions, setSuggestions] = useState(null);
    const [excludedGenres, setExcludedGenres] = useState(new Set());
    const [includedGenres, setIncludedGenres] = useState(new Set());
    const [formats, setFormats] = useState([]);
    const [selectedFormats, setSelectedFormats] = useState([]);

    useEffect(() => {        
        fetchJson(CONFIG.MEDIA_MAPS[inputType])
        .then((data) => setMediaOptions(data));
    }, [inputType])

    useEffect(() => {
        fetchJson("/assets/genres.json")
        .then((data) => setGenres(data));
    }, [])

    useEffect(() => {
        setFormats(CONFIG.MEDIA_FORMAT[inputType]);
    }, [inputType])

    useEffect(() => {
        setSelectedFormats(formats);
    }, [formats])

    useEffect(() => {
        updateSuggestions();
    }, [itemId])

    async function fetchJson(URL) {
        try {
            const response = await fetch(URL);
            if (!response.ok) {
            throw new Error(`HTTP error. Status: ${response.status}`);
            }
            const data = await response.json();
            return data;
        } catch (error) {
            console.log(error);
        }
    }


    // These functions are meant to be used in the genre selectors
    function toggleOptionState(options, sourceSet, setSourceSet, setTargetSet) {
        const newTargetSet = new Set();

        options.forEach(option => {
            if (sourceSet.has(option)) {
                sourceSet.delete(option);
            }
            newTargetSet.add(option);
        });

        setSourceSet(new Set(sourceSet));
        setTargetSet(new Set(newTargetSet));
    }

    function toggleGenreExclusion(genres) {
        toggleOptionState(genres, includedGenres, setIncludedGenres, setExcludedGenres);
    }

    function toggleGenreInclusion(genres) {
        toggleOptionState(genres, excludedGenres, setExcludedGenres, setIncludedGenres);
    }

    function updateSuggestions() {
        if (!itemId) return;

        const params = {
            id: itemId,
            initial_year: yearRange[0],
            final_year: yearRange[1],
            minimum_score: scoreRange[0],
            maximum_score: scoreRange[1],
            excluded_genres: Array.from(excludedGenres),
            included_genres: Array.from(includedGenres),
            formats: selectedFormats,
        };

        mediaFetchingService.getMediaBasedSuggestions(suggestionType, params)
        .then(suggestionsFetched => setSuggestions(suggestionsFetched));
    }

    function handleSelection(selectedItem) {
        if (!selectedItem) { return }
        var id = mediaOptions[selectedItem];
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
        itemId,
        mediaOptions,
        suggestionType,
        yearRange,
        scoreRange,
        suggestions,
        genres,
        excludedGenres,
        includedGenres,
        formats,
        selectedFormats,
        setYearRange,
        setScoreRange,
        setExcludedGenres,
        setIncludedGenres,
        toggleGenreExclusion,
        toggleGenreInclusion,
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