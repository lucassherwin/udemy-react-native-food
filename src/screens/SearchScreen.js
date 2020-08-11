import React, {useState} from 'react';
import { View, Text, StyleSheet } from 'react-native';
import SearchBar from '../components/SearchBar.js';
import yelp from '../api/yelp';

const SearchScreen = () => {
    const [term, setTerm] = useState(''); //term is the search term we are passing to the API
    const [results, setResults] = useState([]);
    return (
        <View>
            <SearchBar 
                term={term}
                onTermChange={(newTerm) => setTerm(newTerm)}
                onTermSubmit={() => console.log('term was submitted')}
            />
            <Text>Search Screen</Text>
            <Text>{term}</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    
})

export default SearchScreen;
