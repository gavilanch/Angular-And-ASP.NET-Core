using Microsoft.AspNetCore.OutputCaching;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace MoviesAPITests.Doubles
{
    internal class OutputCacheStoreFake : IOutputCacheStore
    {
        public ValueTask EvictByTagAsync(string tag, CancellationToken cancellationToken)
        {
            return ValueTask.CompletedTask;
        }

        public ValueTask<byte[]?> GetAsync(string key, CancellationToken cancellationToken)
        {
            throw new NotImplementedException();
        }

        public ValueTask SetAsync(string key, byte[] value, string[]? tags, TimeSpan validFor, CancellationToken cancellationToken)
        {
            throw new NotImplementedException();
        }
    }
}
