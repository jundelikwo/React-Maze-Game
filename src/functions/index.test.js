import { shuffleArray } from './index'

it('should shuffleArray',() => {
    var array = [1,2,3,4,5,6,7,8,9,0]
    var shuffledArray = shuffleArray(array)

    expect(shuffledArray instanceof Array).toEqual(true)
    expect(shuffledArray.length).toEqual(array.length)
})