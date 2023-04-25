export default {
    generator_code(){
        const characters = "123456789";
        let result = "";
        const charactersLength = characters.length;

        for(let i = 0; i <= 4; i++){
            result += characters.charAt(Math.floor(Math.random() * charactersLength));
        }

        return result;
    }
};