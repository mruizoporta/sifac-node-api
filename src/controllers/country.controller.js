import Country from '../models/basic/Country.js';

export async function getCountry(req,res){
try {
    const country= await Country.findAll();
    res.json({
        data:country
    });
} catch (error) {
    console.log(error);
}
}

export async function getOneCountry(req,res){
    const {id}=req.params;
    try {
        const country = await Country.findOne({
            where:{
                countryid:id
            }
        });
        res.json({
            data: country
        })
    } catch (error) {
        console.log(error);
    }
}

export async function getCountrybyCode(req,res){
    const {code}=req.params;
try {
    const country = await Country.findOne({
        where:{
            code:code
        }
    });
    res.json({
        data: country
    })
} catch (error) {
    console.log(error);
}
}
    