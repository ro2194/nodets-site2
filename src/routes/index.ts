import {Router} from 'express';
import * as  PageController from '../controllers/pageController';
import * as SearchController from '../controllers/searchController';

// Cria uma instância do roteador
const router = Router();

// Define a rota para a página inicial, utilizando o método 'home' do PageController

router.get('/', PageController.home);
router.get('/dogs', PageController.dogs);
router.get('/cats', PageController.cats);
router.get('/fishes', PageController.fishes);


router.get('/search', SearchController.search); // Método para lidar com a rota de busca

export default router;