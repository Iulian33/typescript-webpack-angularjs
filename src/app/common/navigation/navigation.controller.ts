import {IComponentController} from 'angular';
import ITopic from '../../ITopic';

class NavigationController implements IComponentController {
    public static $inject: string[] = ['PlaygroundService'];

    public navigationSearchFunction: (searchData: { searchData: ITopic[] }) => any;

    public searchModel: string;

    private navigationSearchData: ITopic[];

    public $onChanges(changes: any) {
        if (changes.navigationSearchData) {
            this.navigationSearchData = Object.assign([], this.navigationSearchData);
        }
    }

    public search() {
        const searchValue = this.searchModel.toLowerCase();
        const filteredSearchData = this.navigationSearchData.filter(searchItem => {
            return searchItem.label.toLowerCase().search(searchValue) > -1;
        });

        this.navigationSearchFunction({searchData: searchValue.length ? filteredSearchData : []});
    }
}

export default NavigationController;