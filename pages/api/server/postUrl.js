import dbConnect from "../../../mongodb/dbConnect"
import UrlSchema from "../../../mongodb/models/UrlSchema"
dbConnect();

export default function postUrl(req, res) {
const url = req.body.url
    if(url.substring(0,29)==="https://www.udemy.com/course/"){
        res.status(200).json({ status: 'Url Added' })
    }else if(url.substring(0,21)==="www.udemy.com/course/"){
        res.status(200).json({ status: 'Url Added' })
    }else if(url.substring(0,17)==="udemy.com/course/"){
        res.status(200).json({ status: 'Url Added' })
    }else{
        res.status(422).json({ status: 'Url Not Added' })
    }

    UrlSchema.findOne({ courseUrl: url}).then((urlExists) => {
        if(urlExists){
            res.status(422).json({ error: 'Url Already Exists' })
        }
        const newUrl = new UrlSchema({courseUrl: url})
        newUrl.save()
    })
}
