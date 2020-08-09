import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#F0F0F7',
        
    },
    teacherList: {
        marginTop: -40,
    },
    searchForm: {
        marginBottom: 24,
    },
    label: {
        color: '#D4c2ff',
        fontFamily: 'Poppins_400Regular',
        marginTop: 10
    },
    inputGroup: {
        flexDirection: "row",
        justifyContent: "space-between",
    },
    inputBlock: {
        width: '48%'
    },
    input: {
        height: 54,
        backgroundColor: '#fff',
        borderRadius: 8,
        justifyContent: "center",
        paddingHorizontal: 16,
        marginTop: 4,
    },
    submitButton:{
        backgroundColor: '#04d361',
        flexDirection: "row",
        height: 56,
        borderRadius: 8,
        justifyContent: "center",
        alignItems: "center",
        marginTop:10
    },
    submitButtonText:{
        color: '#FFF',
        fontFamily: 'Archivo_700Bold',
        fontSize: 16,
    }
});

export default styles;