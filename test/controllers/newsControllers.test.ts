import { INews } from '../../src/config/types/type';
import { controllers } from '../../src/controllers';


describe('News Controller Test', () => {
    const { newsController } = controllers;
    describe('Create New Method', () => {
        test('Should create new', async () => {
            const dataMock: INews = {
                text: 'Text',
                title: 'Title' 
            };

            const response = await newsController.createNews(dataMock);
            expect(response).toEqual(dataMock);
        });
    })
});
