import { Button } from './ui/button'
import { Filter } from 'lucide-react';


function FilterButton(){
    return(
        <Button variant="outline" className="bg-background">
            <Filter />
            <h1>Filter</h1>
        </Button>
    )
}

export default FilterButton