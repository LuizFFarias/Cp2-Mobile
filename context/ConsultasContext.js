import React, { createContext, useContext, useState, useEffect } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';

const DataContext = createContext();

export const useData = () => useContext(DataContext);

export const DataProvider = ({ children }) => {
  const [consultas, setConsultas] = useState([]);

  // Carregar os dados do AsyncStorage quando o componente é montado
  useEffect(() => {
    const fetchData = async () => {
      try {
        const storedData = await AsyncStorage.getItem('CONSULTAS');
        if (storedData) {
          setConsultas(JSON.parse(storedData));
        }
      } catch (error) {
        console.error('Error loading data from AsyncStorage:', error);
      }
    };
    fetchData();
  }, []);

  // Função para salvar os dados no AsyncStorage
  const saveData = async (newData) => {
    try {
      await AsyncStorage.setItem('CONSULTAS', JSON.stringify(newData));
      setConsultas(newData);
    } catch (error) {
      console.error('Error saving data to AsyncStorage:', error);
    }
  };

  return (
    <DataContext.Provider value={{ consultas, saveData }}>
      {children}
    </DataContext.Provider>
  );
};
