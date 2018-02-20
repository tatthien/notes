<template>
    <header id="masthead" class="site-header" role="banner">
        <div class="container inner">
            <div id="logo" class="site-header__logo">
                <router-link :to="{ name: 'home' }">hien's Notes</router-link>
            </div><!-- #logo -->

            <div id="submenu" class="site-header__submenu">
                <nav class="menu" role="navigation">
                    <a href="https://github.com/tatthien" target="_blank">@github</a>
                    <a href="https://twitter.com/tat_thien" target="_blank">@twitter</a>
                </nav>
            </div><!-- #sub-menu -->
        </div>
    </header><!-- .site-header -->
</template>

<script>
  export default {}
</script>

<style lang="scss" scoped>
    .site-header {
        padding: 15px 0;
        background-color: #fff;
        box-shadow: 0 2px 3px rgba(0,0,0,.1);
        position: fixed;
        top: 0;
        left: 0;
        right: 0;
        font-size: 18px;
        z-index: 99;
        .inner {
            display: flex;
            justify-content: space-between;
        }
        &__logo {
            a {
                font-family: $font-family--heading;
                color: $color--dark;
                &:before {
                    content: 'T';
                    background: $color--primary;
                    font-weight: 600;
                    padding: 0 7px;
                }
            }
        }
        &__submenu {
            a {

                font-weight: 600;
                display: inline-block;
                margin-left: 15px;
                color: $color--primary;
            }
        }
    }
</style>
