// ItemList.js
import React, { useCallback } from "react";
import { FlatList, StyleSheet, View, Text } from "react-native";
import ListItem from "./ListItem";

const ItemList = ({ items, onEdit, onDelete }) => {
    
    const renderItem = useCallback(({ item }) => (
        <ListItem item={item} onEdit={onEdit} onDelete={onDelete} />
    ), [onEdit, onDelete]);

    const safeKeyExtractor = (item, index) => {
        return item?.id?.toString() ?? index.toString();
    };

    return (
        <FlatList
            style={styles.list} // <----------- CORREÇÃO AQUI
            data={items}
            keyExtractor={safeKeyExtractor}
            renderItem={renderItem}
            ListEmptyComponent={
                <View style={styles.emptyContainer}>
                    <Text style={styles.emptyText}>Nenhum item disponível</Text>
                </View>
            }
            contentContainerStyle={items?.length === 0 ? styles.emptyList : null}
        />
    );
};

const styles = StyleSheet.create({
    list: { // <----------- E AQUI
        flex: 1, // Isso faz a lista crescer e ocupar o espaço
    },
    emptyContainer: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        padding: 20,
    },
    emptyText: {
        fontSize: 16,
        color: "#999",
    },
    emptyList: {
        flexGrow: 1,
        justifyContent: "center",
    },
});

export default ItemList;