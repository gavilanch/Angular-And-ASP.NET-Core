using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.OutputCaching;
using Microsoft.EntityFrameworkCore;
using MoviesAPI.Controllers;
using MoviesAPI.DTOs;
using MoviesAPI.Entities;
using MoviesAPITests.Doubles;
using NSubstitute;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace MoviesAPITests.Controllers
{
    [TestClass]
    public class GenresControllerTests: TestBase
    {
        [TestMethod]
        public async Task Get_ReturnsAllOfTheGenres()
        {
            // Preparation
            var nameDB = Guid.NewGuid().ToString();
            var context = BuildContext(nameDB);
            var mapper = ConfigureAutoMapper();
            IOutputCacheStore outputCacheStore = null!;

            context.Genres.Add(new Genre() { Name = "Genre 1" });
            context.Genres.Add(new Genre() { Name = "Genre 2" });
            await context.SaveChangesAsync();

            var context2 = BuildContext(nameDB);

            var controller = new GenresController(outputCacheStore, context2, mapper);

            // Testing
            var response = await controller.Get();

            // Verification
            Assert.AreEqual(expected: 2, actual: response.Count);
        }

        [TestMethod]
        public async Task Get_ShouldReturn404_WhenGenreWithIdDoesNotExists()
        {
            // Preparation
            var nameDB = Guid.NewGuid().ToString();
            var context = BuildContext(nameDB);
            var mapper = ConfigureAutoMapper();
            IOutputCacheStore outputCacheStore = null!;

            var id = 1;
            var controller = new GenresController(outputCacheStore, context, mapper);

            // Testing
            var response = await controller.Get(id);

            // Verification
            Assert.IsInstanceOfType<NotFoundResult>(response.Result);
        }

        [TestMethod]
        public async Task Get_ShouldReturnTheGenre_WhenGenreWithIdExists()
        {
            // Preparation
            var nameDB = Guid.NewGuid().ToString();
            var context = BuildContext(nameDB);
            var mapper = ConfigureAutoMapper();
            IOutputCacheStore outputCacheStore = null!;

            context.Genres.Add(new Genre() { Name = "Genre 1" });
            context.Genres.Add(new Genre() { Name = "Genre 2" });
            await context.SaveChangesAsync();

            var context2 = BuildContext(nameDB);

            var id = 1;
            var controller = new GenresController(outputCacheStore, context2, mapper);

            // Testing
            var response = await controller.Get(id);

            // Verification
            var result = response.Value;
            Assert.AreEqual(expected: id, actual: result!.Id);
        }

        [TestMethod]
        public async Task Post_ShouldCreateGenre_WhenWeSendGenre()
        {
            // Preparation
            var nameDB = Guid.NewGuid().ToString();
            var context = BuildContext(nameDB);
            var mapper = ConfigureAutoMapper();
            IOutputCacheStore outputCacheStore = new OutputCacheStoreFake();

            var controller = new GenresController(outputCacheStore, context, mapper);

            // Testing
            var response = await controller.Post(new GenreCreationDTO { Name = "new genre" });

            // Verification
            Assert.IsInstanceOfType<CreatedAtRouteResult>(response);

            var context2 = BuildContext(nameDB);
            var count = await context2.Genres.CountAsync();
            Assert.AreEqual(expected: 1, actual: count);
        }

        private const string cacheTag = "genres";

        [TestMethod]
        public async Task Post_ShouldInvokeEvictByTagAsync_WhenWeSendAGenre()
        {
            // Preparation
            var nameDB = Guid.NewGuid().ToString();
            var context = BuildContext(nameDB);
            var mapper = ConfigureAutoMapper();
            IOutputCacheStore outputCacheStore = Substitute.For<IOutputCacheStore>();

            var controller = new GenresController(outputCacheStore, context, mapper);

            // Testing
            var response = await controller.Post(new GenreCreationDTO { Name = "new genre" });

            // Verification
            await outputCacheStore.Received(1).EvictByTagAsync(cacheTag, default);
        }

    }
}
