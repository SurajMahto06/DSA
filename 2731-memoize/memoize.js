/**
 * @param {Function} fn
 * @return {Function}
 */
function memoize(fn) {
      const  cache = {}

    return function(...args) {
        const key = args.join(',')
        if(cache.hasOwnProperty(key)){
            return cache[key];
        }
         result = fn(...args)
         cache[key] = result;
         return result

    }
}


/** 
 * let callCount = 0;
 * const memoizedFn = memoize(function (a, b) {
 *	 callCount += 1;
 *   return a + b;
 * })
 * memoizedFn(2, 3) // 5
 * memoizedFn(2, 3) // 5
 * console.log(callCount) // 1 
 */