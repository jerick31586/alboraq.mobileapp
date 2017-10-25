﻿using Alboraq.MobileApp.Core;
using Newtonsoft.Json;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Threading.Tasks;
using System.Web.Http;

namespace Alboraq.MobileApp.WebApi.Controllers
{
    [Authorize]
    [RoutePrefix("api/product")]
    public class ProductController : ApiController
    {
        private IUnitOfWork _uow;
        public ProductController(IUnitOfWork uow)
        {
            _uow = uow;
        }

        [Route("getcategories")]
        public async Task<IHttpActionResult> GetCategories()
        {
            var productCategories = await _uow.ProductCategories.GetAllAsync();
            
            return Ok(productCategories);
        }

        [Route("getproductsbycategoryname")]
        public async Task<IHttpActionResult> GetProductsByCategoryName(string categoryName)
        {
            var products = await _uow.Products.GetProductsByCategoryNameAsync(categoryName);
            return Ok(products);
        }

        [Route("getproductdetail")]
        public async Task<IHttpActionResult> GetProductDetail(string productNo)
        {
            var product = await _uow.Products.GetAsync(productNo);
            return Ok(product);
        }
    }
}
