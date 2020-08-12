import React, {useState, useEffect} from 'react';
import { View, Text, StyleSheet } from 'react-native';
import SearchBar from '../components/SearchBar.js';
import yelp from '../api/yelp';
import useResults from '../hooks/useResults.js';

const SearchScreen = () => {
    const [term, setTerm] = useState(''); //term is the search term we are passing to the API
    const [searchApi, results, errorMessage] = useResults();

    return (
        <View>
            <SearchBar 
                term={term}
                onTermChange={setTerm}
                onTermSubmit={() => searchApi(term)}
            />
            {errorMessage ? <Text>{errorMessage}</Text> : null}
            <Text>We have found {results.length} results</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    
})

export default SearchScreen;
