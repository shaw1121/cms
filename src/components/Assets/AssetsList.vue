<template>
  <!-- <div>assets list</div> -->
  <div>
    <NavBar title="Assets Status"></NavBar>

    <div class="assets-list">
        <!-- <table>
            <tr>
                <th style="width:40%">Name</th>
                <th style="width:30%">Status</th>
                <th style="width:30%">Detail</th>
            </tr>
            <tr>
                <mt-cell title="标题文字" value="说明文字"></mt-cell>
            </tr>
        </table> -->
        <!-- <ul>
            <li @click="showpopup()">show pop1</li>
            <li>
                <mt-cell title="标题文字" value="说明文字"></mt-cell>
            </li>
                        <li>
                <mt-cell title="标题文字" value="说明文字"></mt-cell>
            </li>

        </ul> -->
        
        <mt-cell title="Asset1" value="说明文字">
            <div>
                <mt-badge type="error" size="small">3</mt-badge>
                <mt-button @click.native="showpopup()" size="small">Details</mt-button>
            </div>
        </mt-cell>

        <mt-cell title="Asset2" value="说明文字">
            <div>
                <mt-badge type="success" size="small">3</mt-badge>
                <mt-button @click.native="showpopup()" size="small">Details</mt-button>
            </div>
        </mt-cell>
        <mt-cell title="Asset3" value="说明文字">
                        <div>
                <mt-badge type="success" size="small">3</mt-badge>
                <mt-button @click.native="showpopup()" size="small">Details</mt-button>
            </div>
        </mt-cell>
        <mt-cell title="Asset4" value="说明文字">
            <div>
                <mt-badge type="success" size="small">0</mt-badge>
                <mt-button @click.native="showpopup()" size="small">Details</mt-button>
            </div>
        </mt-cell>
        <mt-cell title="Asset5" value="说明文字">
            <div>
                <mt-badge type="warning" size="small">3</mt-badge>
                <mt-button @click.native="showpopup()" size="small">Details</mt-button>
            </div>
        </mt-cell>
        <mt-cell title="Asset6" value="说明文字">
            <div>
                <mt-badge type="success" size="small">3</mt-badge>
                <mt-button @click.native="showpopup()" size="small">Details</mt-button>
            </div>
        </mt-cell>
        <mt-cell title="Asset7" value="说明文字">
            <div>
                <mt-badge type="success" size="small">3</mt-badge>
                <mt-button @click.native="showpopup()" size="small">Details</mt-button>
            </div>
        </mt-cell>
        <mt-cell title="Asset8" value="说明文字">
            <div>
                <mt-badge type="success" size="small">3</mt-badge>
                <mt-button @click.native="showpopup()" size="small">Details</mt-button>
            </div>
        </mt-cell>
    </div>

    <mt-popup
        v-model="popupVisible"
        position="right">
        <div class="popup">
            Asset1
            <table>
                <tr>
                    <th style="width: 50%"></th>
                    <th style="width: 50%"></th>
                </tr>
                <tr>
                    <td>line: S7-1200</td>
                    <td>Status: Down</td>
                </tr>
                <tr>
                    <td>Output Volume: 2500</td>
                    <td>Start Time: 08:10</td>
                </tr>
                <tr>
                    <td>Down Time(mins): 50</td>
                </tr>
                <tr>
                    <td><mt-button size="small">Edit</mt-button></td>
                    <td><mt-button size="small">Delete</mt-button></td>
                </tr>
            </table>

        </div>

    </mt-popup>
  </div>

</template>

<script>
export default {
    data() {
        return {
            popupVisible: false
        }
    },
    methods: {
        showpopup() {
            this.popupVisible = true
        }
    }
}
</script>

<style scoped>
mt-cell {
    text-align: left;
    float: left;
}

.popup {
    width: 100%;
    height: 100%;
    margin-top: 30px;
}

.mint-popup {
    width: 100%;
    height: 50%;
}

table {
    text-align: left;
}

tr {
    height: 30px;
}

.assets-list {
    text-align: left;
}
</style>