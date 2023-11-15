import mongoose from 'mongoose';

const NewsSchema = new mongoose.Schema({
    title: String,
    text: String,
    autor: String,
    image: String,
    publicationDate: String,
    link: String,
});

export const NewsDatabase = mongoose.model("News", NewsSchema);