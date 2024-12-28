using AutoMapper;
using Microsoft.EntityFrameworkCore;
using MoviesAPI;
using MoviesAPI.Utilities;
using NetTopologySuite;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace MoviesAPITests
{
    public class TestBase
    {
        protected ApplicationDbContext BuildContext(string nameDB)
        {
            var options = new DbContextOptionsBuilder<ApplicationDbContext>()
                .UseInMemoryDatabase(nameDB).Options;

            return new ApplicationDbContext(options);
        }

        protected IMapper ConfigureAutoMapper()
        {
            var config = new MapperConfiguration(options =>
            {
                var geometryFactory = NtsGeometryServices.Instance.CreateGeometryFactory(srid: 4326);
                options.AddProfile(new AutoMapperProfiles(geometryFactory));
            });

            return config.CreateMapper();
        }
    }
}
