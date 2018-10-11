using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.Mvc.Filters;

namespace WSBackend.Controllers
{
    [Produces("application/json")]
    public class ContactsController
    {
        static Contact[] StaticContacts =
            new Contact[]
            {
                new Contact() {
                    Id = 1,
                    First = "Chad",
                    Last = "Michel",
                    Twitter = "@chadmichel"
                },                
                new Contact() {
                    Id = 1,
                    First = "Bill",
                    Last = "Udell",
                    Twitter = "@billudell"
                },            
                new Contact() {
                    Id = 1,
                    First = "Russ",
                    Last = "Guill",
                    Twitter = "@russwritesne"
                }
            };

        [HttpPost]
        [Route("api/ContactsAll")]
        public ContactListResponse All()
        {
            return new ContactListResponse()
            {
                Success = true,
                Contacts = StaticContacts
            };
        }

        [HttpPost]
        [Route("api/ContactsSearch")]
        public ContactListResponse Search([FromBody]SearchQuery query)
        {
            var items = StaticContacts.Where(x => x.First.ToLower().Contains(query.Query.ToLower())).ToArray();
            return new ContactListResponse()
            {
                Success = true,
                Contacts = items
            };
        }

        [HttpPost]
        [Route("api/ContactsSave")]
        public ContactSaveResponse Save([FromBody]ContactSaveRequest request)
        {
            var items = StaticContacts.ToList();
            var item = items.FirstOrDefault(x => x.Id == request.Contact.Id);
            if (item == null)
            {
                items.Add(request.Contact);
            }
            else
            {
                items.Remove(item);
                items.Add(request.Contact);
            }

            return new ContactSaveResponse()
            {
                Success = true,
                Contact = request.Contact
            };
        }


        [HttpPost]
        [Route("api/ContactsFind")]
        public ContactFindResponse Find([FromBody]ContactFindRequest request)
        {
            var items = StaticContacts;
            var item = items.FirstOrDefault(x => x.Id == request.Id);
            if (item == null)
            {
                return new ContactFindResponse()
                {
                    Success = false
                };
            }
            return new ContactFindResponse()
            {
                Success = true,
                Contact = item
            };
        }
    }

    public class Contact
    {
        public int Id { get; set; }
        public string First { get; set; }
        public string Last { get; set; }
        public string Twitter { get; set; }
    }

    public class ContactFindRequest
    {
        public int Id { get; set; }
    }

    public class ContactFindResponse
    {

        public bool Success { get; set; }
        public Contact Contact { get; set; }
    }

    public class ContactListResponse
    {
        public bool Success { get; set; }
        public Contact[] Contacts { get; set; }
    }

    public class ContactSaveRequest
    {
        public Contact Contact { get; set; }
    }

    public class ContactSaveResponse
    {
        public bool Success { get; set; }
        public Contact Contact { get; set; }
    }
    public class SearchQuery
    {
        public string Query { get; set; }
    }

}

