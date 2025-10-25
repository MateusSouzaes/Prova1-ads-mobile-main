// ListItem.js
import React from "react";
import { View, Text, TouchableOpacity, StyleSheet } from "react-native";

const ListItem = ({ item, onEdit, onDelete }) => {
    return (
        <View style={styles.itemContainer}>
            {/* CORREÇÃO AQUI: O nome do item foi adicionado de volta */}
            <Text style={styles.itemText}>{item?.name ?? 'Item sem nome'}</Text> 
            
            <View style={styles.buttonGroup}>
                <TouchableOpacity style={styles.editButton} onPress={() => onEdit(item)}>
                    <Text style={styles.buttonText}>Editar</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.deleteButton} onPress={() => onDelete(item.id)}>
                    <Text style={styles.buttonText}>Excluir</Text>
                </TouchableOpacity>
            </View> 
        </View>
    );
};

const styles = StyleSheet.create({
    itemContainer: {
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        padding: 15,
        marginVertical: 5,
        backgroundColor: "#FFF",
        borderRadius: 8,
        // ... (sombras)
        elevation: 2,
    },
    itemText: {
        flex: 1, // Isso está correto
        marginRight: 10, // Isso está correto
        fontSize: 16,
        color: "#333",
    },
    buttonGroup: {
        flexDirection: "row",
    },
    // ... (resto dos estilos)
    editButton: {
        backgroundColor: "#4CAF50",
        paddingVertical: 5,
        paddingHorizontal: 10,
        borderRadius: 5,
        marginRight: 10,
    },
    deleteButton: {
        backgroundColor: "#F44336",
        paddingVertical: 5,
        paddingHorizontal: 10,
        borderRadius: 5,
    },
    buttonText: {
        color: "#FFF",
        fontSize: 14,
    },
});

export default ListItem;