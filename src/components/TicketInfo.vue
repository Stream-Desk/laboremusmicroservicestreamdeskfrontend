<template>
  <div class="infoCard">
    <div >
     <span style="font-weight: bold"> Details</span>&nbsp;&nbsp;<span style="font-weight: bold">No</span
      >&nbsp;&nbsp;<span class="danger" style="color: red">#566</span>
    </div>

    <div class="infoCardContainer">
      <div class="infoCard_left">
        <div class="spacebtndivs">
          <span style="font-weight: bold ">Requester</span>&nbsp;&nbsp;Bank
        </div>
        <div class="spacebtndivs"><span style="font-weight: bold">Type</span>&nbsp;&nbsp;Bugs</div>
        <div class="spacebtndivs">
          <span style="font-weight: bold">Category</span>&nbsp;&nbsp;Bugs
        </div>

        <div class="spacebtndivs">
          <span style="font-weight: bold">Summary</span>&nbsp;&nbsp;Upload
          images.
        </div>
        <div class="spacebtndivs">
          <span style="font-weight: bold">Description</span>&nbsp;&nbsp;I cannot
          upload images for example National ID.
        </div>

        <div class="spacebtndivs">
          <span style="font-weight: bold">Attachments</span>
        </div>
        <div class="spacebtndivs">
          <span style="font-weight: bold">Change Status</span>&nbsp;&nbsp;<span
            class="selectoptions"
            ><select>
              <optgroup>
                <option>Pending</option>
                <option>Pending</option>
              </optgroup>
            </select>
            <i class="fas fa-caret-down"></i>
          </span>
        </div>
      </div>
      <div class="infoCard_right">
        <div class="spacebtndivs">
          <span style="font-weight: bold">Current Status</span>&nbsp;&nbsp;Open
        </div>
        <div class="spacebtndivs">
          <span style="font-weight: bold">Priority</span>&nbsp;&nbsp;Normal
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "TicketInfo",
};
</script>

<style scoped>
.infoCardContainer {
  display: flex;
  /* justify-content: space-between; */
}
.infoCard {
  width: 100%;
}
li {
  list-style-type: none;
}
.selectoptions {
  box-shadow: 5p 5px #fff;
  border: 2px solid #888;
  box-sizing: border-box;
  border-radius: 3px;
}
.spacebtndivs{
padding-top: 15px;
}
</style>