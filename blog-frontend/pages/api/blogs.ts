import {NextApiRequest, NextApiResponse } from 'next';
import { supabase } from '../../lib/supabaseClient';

export default async function handler(req: NextApiRequest, res: NextApiResponse){
    //query blogs table make sure this table is available
    const {data, error} = await supabase.from('blogs').select('*').order('created_ata', {ascending: false}); // will adjust column name as needed

    if(error) {
        return res.status(500).json({error: error.message});

    }

    return res.status(200).json(data);
    

}