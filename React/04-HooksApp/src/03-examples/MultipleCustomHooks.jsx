import {useCounter, useFetch} from '../hooks'
import { LoadingQuote, QuoteBlock } from '.';

export const MultipleCustomHooks = () => {

    
    const {counter, increment} = useCounter(1);

    const {data, isLoading, hasError} = useFetch(`https://api.breakingbadquotes.xyz/v1/quotes/${counter}`);
    const {author, quote} = !!data && data[0];
    return (
        <>
        <h1 className='text-5xl text-bold text-center mb-5'>Breaking Bad Quotes</h1>
        <hr />
        {
            isLoading ? <LoadingQuote /> : <QuoteBlock quote={quote} author={author}/>
        }

        <button className='rounded-md bg-indigo-500 p-3 m-5 text-white' onClick={() => increment()} disabled={isLoading}>Next Quote</button>

    </>
    )
}
