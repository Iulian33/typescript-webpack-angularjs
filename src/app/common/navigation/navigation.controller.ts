import {IComponentController} from 'angular';
import ITopic from '../../ITopic';

class NavigationController implements IComponentController {
    public static $inject: string[] = ['PlaygroundService'];

    public navigationSearchFunction: (searchData: { searchData: ITopic[] }) => any;

    public searchModel: string;

    private navigationSearchStatus: boolean;

    private navigationSearchData: ITopic[];

    public $onChanges(changes: any) {
        // clone object to prevent passing objects by reference and update parent data
        if (changes.navigationSearchData.currentValue) {
            this.navigationSearchData = Object.assign([], this.navigationSearchData);
            this.navigationSearchStatus = true;
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