import { InMemoryDbService } from 'angular-in-memory-web-api';
import { AcademyFakeDb } from './academy';
import { ContactsFakeDb } from './contacts';
import { ECommerceFakeDb } from './e-commeric';
import { FaqFakeDb } from './faq';
import { ProductsFakeDb } from './products';
import { StoresFakeDb } from './stores';
import { UsersFakeDb } from './users';


export class FakeDbService implements InMemoryDbService
{
    createDb(): any
    {
        return {
            'users' : UsersFakeDb.users, 
            ////products
            'products' : ProductsFakeDb.products,
            'frutis'    : ProductsFakeDb.frutis,
            'vegtable'    : ProductsFakeDb.vegtable,
            'leaves'    : ProductsFakeDb.leaves,

             // FAQ
             'faq': FaqFakeDb.data,

            

            // E-Commerce
            'e-commerce-products' : ECommerceFakeDb.products,
            'e-commerce-orders'   : ECommerceFakeDb.orders,
        
            // Contacts
            'contacts-contacts': ContactsFakeDb.contacts,
            'contacts-user'    : ContactsFakeDb.user,

           //Stores
           'stores': StoresFakeDb.Stores,

             // Academy
             'academy-categories': AcademyFakeDb.categories,
             'academy-courses'   : AcademyFakeDb.courses,
             'academy-course'    : AcademyFakeDb.course,
        };
    }
}
